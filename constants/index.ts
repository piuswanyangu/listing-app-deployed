// import { PropertyProps } from "@/interfaces";

import { PropertyProps } from "@/interfaces";
export const HERO_BG= '/assets/m1.jpg'

export const PROPERTYLISTINGSAMPLE: PropertyProps []  =  [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://imgs.search.brave.com/5VMlARKXq7Y7wup8sryg6OnASLYJjMZeGDEIGxgctYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlaG91c2VkZXNp/Z25lcnMuY29tL2lt/YWdlcy9wbGFucy8w/MS9EU0QvYnVsay8x/NDU2L3NlYS1jYXZl/LTEtNV9tLndlYnA",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://imgs.search.brave.com/Z6nAWvmi6Z1lJbJBMD3cRYLAgiypltwkPQv4_Acwylc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDgv/MDI4LzgwMS9zbWFs/bC9leHRlcmlvci1s/dXh1cnktaG91c2Ut/Y2xhc3NpYy1zdHls/ZS13aXRoLWxhd24t/ZmllbGQtY29uY2Vw/dC1mb3ItcmVhbC1l/c3RhdGUtc2FsZS1v/ci1wcm9wZXJ0eS1p/bnZlc3RtZW50M2Qt/cmVuZGVyaW5nLWZy/ZWUtcGhvdG8uanBn",
    discount: "30"
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://imgs.search.brave.com/97qnr87Vhs_y_hbjr7PW_znuvgKcZKV46wzdYIutvro/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzQ4/L2JmLzJjNDhiZjRh/MTYxNjZjYTIwMzcy/NWRmMDhkZDU5NjNj/LmpwZw",
    discount: ""
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "https://imgs.search.brave.com/wPZhbPCL_67QGvT8lwJmHM18wLtLO9FKmc8IAhgSWfQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjMv/MzA4LzQ2MS9zbWFs/bC9haS1nZW5lcmF0/aXZlLWV4dGVyaW9y/LW9mLW1vZGVybi1s/dXh1cnktaG91c2Ut/d2l0aC1nYXJkZW4t/YW5kLWJlYXV0aWZ1/bC1za3ktcGhvdG8u/anBn",
    discount: "15"
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "https://imgs.search.brave.com/NkfRhT5BLR2p37R-HMDDPqeVR-6O0pueeP1goCaY_Dc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bW9kZXJuLWhvdXNl/LmpwZz93aWR0aD0x/MDAwJmZvcm1hdD1w/anBnJmV4aWY9MCZp/cHRjPTA",
    discount: "20"
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "https://imgs.search.brave.com/I6NVIfforXKEvPslMTOBw1I_Orlb-L3DGwQuIbQh5QY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ExL2E1/LzcwL2ExYTU3MGQ4/NjY4M2MxZGNjOTM4/NGMyOGFhMGM0MGZm/LmpwZw",
    discount: ""
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://imgs.search.brave.com/_jN_jotJz60HxOPz2DIPu-7SEXTTqQCZVB9AOEi4hbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/NTgyLzE5Ny9zbWFs/bC9iZWF1dGlmdWwt/bW9kZXJuLWhvdXNl/LWV4dGVyaW9yLXdp/dGgtY2FycG9ydC1t/b2Rlcm4tcmVzaWRl/bnRpYWwtZGlzdHJp/Y3QtYW5kLW1pbmlt/YWxpc3QtYnVpbGRp/bmctY29uY2VwdC1i/eS1haS1nZW5lcmF0/ZWQtZnJlZS1waG90/by5qcGc",
    discount: "10"
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "https://imgs.search.brave.com/geD74deo0Bg-RiYYZbNsuzyfijSJSycXtES-oE5nBYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/MDA5LzczMy9zbWFs/bC9tb2Rlcm4taG91/c2UtZXh0ZXJpb3It/Zm9yLXNhbGUtb3It/cmVudC1waG90by5q/cGc",
    discount: "25"
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://imgs.search.brave.com/58QjDwlFCtfIyJESnvD_zeb8IR77uK-YiDSnDMQnBhA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdmL2Nj/LzkxLzdmY2M5MWRk/OGU3Zjk2MDhhNDc1/ZGIxNTZmZDNkOTNj/LmpwZw",
    discount: ""
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://imgs.search.brave.com/geD74deo0Bg-RiYYZbNsuzyfijSJSycXtES-oE5nBYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/MDA5LzczMy9zbWFs/bC9tb2Rlcm4taG91/c2UtZXh0ZXJpb3It/Zm9yLXNhbGUtb3It/cmVudC1waG90by5q/cGc",
    discount: "40"
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://imgs.search.brave.com/_Sjlrakh9c95IXqy4xdF08kaC8e2GAnp19zmv9EO_Xw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/NTM4NDU2OC9waG90/by9ldXJvcGUtbW9k/ZXJuLWNvbXBsZXgt/b2YtcmVzaWRlbnRp/YWwtYnVpbGRpbmdz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1pVzROQmlNUEtF/dXZhQTdoOHdJc1BI/aWtoUzY0ZVItNUVW/UGZqUTlHUE9BPQ",
    discount: "50"
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://imgs.search.brave.com/xab68tE7-zwCdGm4g1KWp_WgIlxZ_UB75uTviIDZv7Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2NjMi9tb2Rl/cm4tYXJjaGl0ZWN0/dXJhbC1iZWF1dHkt/MDQxMC01NzA1NDIz/LmpwZz9mbXQ",
    discount: ""
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "https://imgs.search.brave.com/vnQLJyOMbOQtyxRnQ6XZr5CglkOBW0MFKGfiF3c3c8k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tb2Rl/cm4tdG93bi1ob3Vz/ZXMtMjIxMjQ2MDQu/anBn",
    discount: "35"
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "https://imgs.search.brave.com/-JohQAMFl9rdHuLqr8Kj3cIskoJfg3XvDOoYFxi-eO4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI5LzNh/L2IyLzI5M2FiMjQx/NGZkNzg0OTUxMDI2/NjhjY2JhODQ0OWJh/LmpwZw",
    discount: ""
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://imgs.search.brave.com/_6FUCXLWXZO6qrq11cN4U_I8jCmuBTjSJsnUYE_wEjk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMwL2Mz/LzIzLzMwYzMyM2Fk/ZTFkYmYzYTMyOGYw/YWIxMmMzMGRhNTQ1/LmpwZw",
    discount: "20"
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "https://imgs.search.brave.com/gF4C9Yt8mA2YranF9Mb4oDnSBJvB7fWd6GY5sm8qiV4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzljLzI0/L2E2LzljMjRhNmZl/MDVlMzk1MzMzZGJi/YzRhNDFkMmEwN2I3/LmpwZw",
    discount: "25"
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "https://imgs.search.brave.com/6jQysRCp9MRgw3blCmhjizT1KDZO1Pp2PrpT9OFFKFE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ2Lzlh/L2Y3LzQ2OWFmNzM2/NzQzNjNiZGQxYzU0/MzFmMDIyNTRhYjM5/LmpwZw",
    discount: "30"
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://imgs.search.brave.com/eNZOrahN6w_ak2W-LNNQ6TXZGP0hIDvnbT6DWlcCSTA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE3LzY3LzEzLzUz/LzM2MF9GXzE3Njcx/MzUzMjNfUXpUR2Y0/UWlCeEZUcEJnMW92/cVp6VHVKZkp5OVo5/OEwuanBn",
    discount: ""
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "https://imgs.search.brave.com/iDTzYmzbFhqYnJ481sMaui__BGGIKjJyombMg7WjZcI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVmLzU4/LzdkLzVmNTg3ZGNk/NGVlMzk4Yjc3NTZl/MjE2NDg2OTE1ZGRh/LmpwZw",
    discount: "60"
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://imgs.search.brave.com/IPXTj2xwF_FX7WvpHmRNusCSiCdLxBqSHZR6eupIKqs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tb2Rl/cm4taG91c2UtY29y/bmVyLWxvdC00MjI4/MTkyNC5qcGc",
    discount: ""
  }
];
