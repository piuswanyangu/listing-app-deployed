import listProperties from "@/pages/api/properties";
import getProperty from "@/pages/api/properties/[id]";
import type { NextApiRequest, NextApiResponse } from "next";
import { describe, expect, it, vi } from "vitest";

type JsonBody = unknown;

function createResponse() {
  let statusCode = 200;
  let body: JsonBody;
  const headers = new Map<string, string>();

  const response = {
    status: vi.fn((code: number) => {
      statusCode = code;
      return response;
    }),
    json: vi.fn((value: JsonBody) => {
      body = value;
      return response;
    }),
    setHeader: vi.fn((name: string, value: string) => {
      headers.set(name, value);
      return response;
    }),
  } as unknown as NextApiResponse;

  return {
    response,
    result: () => ({ statusCode, body, headers }),
  };
}

function createRequest(method: string, query: NextApiRequest["query"] = {}) {
  return { method, query } as NextApiRequest;
}

describe("GET /api/properties", () => {
  it("returns fixture properties with stable IDs", () => {
    const { response, result } = createResponse();
    listProperties(createRequest("GET"), response);

    const { statusCode, body } = result();
    expect(statusCode).toBe(200);
    expect(body).toEqual(expect.arrayContaining([expect.objectContaining({ id: "nairobi-garden-apartment" })]));
  });

  it("rejects unsupported methods", () => {
    const { response, result } = createResponse();
    listProperties(createRequest("POST"), response);

    expect(result().statusCode).toBe(405);
    expect(result().headers.get("Allow")).toBe("GET");
  });
});

describe("GET /api/properties/[id]", () => {
  it("returns a fixture property by ID", () => {
    const { response, result } = createResponse();
    getProperty(createRequest("GET", { id: "nairobi-garden-apartment" }), response);

    expect(result().statusCode).toBe(200);
    expect(result().body).toEqual(expect.objectContaining({ id: "nairobi-garden-apartment", name: "Nairobi Garden Apartment" }));
  });

  it("returns 404 for an unknown ID", () => {
    const { response, result } = createResponse();
    getProperty(createRequest("GET", { id: "missing-property" }), response);

    expect(result()).toMatchObject({ statusCode: 404, body: { error: "Property not found" } });
  });

  it("rejects unsupported methods", () => {
    const { response, result } = createResponse();
    getProperty(createRequest("DELETE", { id: "nairobi-garden-apartment" }), response);

    expect(result().statusCode).toBe(405);
    expect(result().headers.get("Allow")).toBe("GET");
  });
});
