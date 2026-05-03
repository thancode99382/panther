export const products = [
  {
    id: "stealth-v1",
    name: "STEALTH V1",
    category: "Tập Luyện Cường Độ Cao",
    price: 185.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLGvdxdL52JaDJHDJAbz_BFIU_yxQluie_MnzfG9jHnFDkS9yRfYLFV-uwHJxu7UL15T-4xff71pBzwOziD-xzr0v2Uq9eTiBw-LLWPC5r9e0cpR-oX_r9Kaq6iOYNK3AgfeYx7D9kHB9JUn707021cCEKHqxBlx4rOJ4P1Jl1xTJE_mg-xNmEoSbENIiqIFYOl99JKbcW5oh6bpkMvin0Nv9IWMSOSGU1rTq5wJ645cUViv75VPUlwXX1AFDlU_AjMt9JCdbTnX_F",
    badge: "Giới Hạn"
  },
  {
    id: "nitro-speed",
    name: "NITRO SPEED",
    category: "Marathon Đường Dài",
    price: 210.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqG6aueCewTvzdUja5QIB25j8ev8FFJSlfmliJBxZrFqBSYiPri0M5tRNb8VlaUdEt2biaUuX5p81Ga5w3Sj-irqXYxe07hSm6mR5tkYoAiVIFd53Z_U_e9jetvi1tIIMAq8DMlT7w-xieL_PdcCQzHMUtkAf8myj-ZBSFAM7Xi-Ruxq-Jrbk5YCbj9pm90UM6r5q2l8CSSF7Z8iR2t9kBlK86DlctRF7oT5Q3ms_STFSmx8Q4frB9imRqAB2lImhOjhl4Ob7kgqPy",
    badge: null
  },
  {
    id: "urban-lux",
    name: "URBAN LUX",
    category: "Hiệu Suất Đường Phố",
    price: 165.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtLo2g0qiCvSd23imV4i-HxNsPF_8JjsMRPjZ6hgYzeCe7nHoIsXhB2p4EEL_B7PntXfNx6gQUbmbHl8PILzEOqQ3yBscc82VbEtgdjjdkRSahsPGHcjUeUHiqNAdMp3ubKZn6KlQe4Oph2LZLfJnBAvGNnmJ2Pic8Cf5BoNCPIF269a7uJWkbdkZT0Dlb1a7JBNb6Wz4ETai7xd-RBKGusLk3RPCyLjimteC50O8GP6jYKPvQeNNYi6YSFjjmiUWNU2-6lqmdnWTo",
    badge: "Mới"
  },
  {
    id: "apex-pro",
    name: "APEX PRO",
    category: "Bóng Rổ Elite",
    price: 225.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAetGJI8dbAatC8Ryqw3BbnPMoIbZi4lqhMCrybpJKygpJdUvz-fj56Wja2RjLUBTY6KUo_x_CqDhUGDyFHg_spd3LV3GbM6298xRjgEBCniAtvHklHJBGoeOzQxWqjibZQG2Yk_2GJRI7YMw8T_LStciUiW0Z5JqogqR2aZSdlrmXXZ_P_to1WaF00uDIQW_odj32nuHaPlqgYd7ro-gWymmiWZ8M-yNcZWv9xJii3KiSMXeINNHDK4CqcW0e4BustOz9klUIodh1k",
    badge: null
  },
  {
    id: "pulse-lite",
    name: "PULSE LITE",
    category: "Cardio Hạng Nhẹ",
    price: 140.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXAsOZa3-rVS5jk3yTM2BMghiWlnqzdbTqjMISaa9OaIc3z7OW01aabYJ0MS9wLglNtwUzCr_Nw2WxYa-r0zwEgPNZl8g6LTu55E3ZQHFussha0y_mBkI3pfM6izkws_MKeCrQfys-ZGorFigqLNMbh_wZCtZd2Ki66papAZs4tQ-w4_trEHkWvihvxHLkfRTGUHeYc2YIDpr7ChXSiTOQDqMmz05FaSTTCbAHNUvELkk6dX_Tmmwu0JTb7FCCYljvQGjxSxfArAqk",
    badge: null
  },
  {
    id: "vector-trail",
    name: "VECTOR TRAIL",
    category: "Phản Hồi Mọi Địa Hình",
    price: 195.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBOX1HFw2wLj0ylCVgKi2SpURx7xasX0-9I5QZRSJ9Ev5I5N6BZo1ly2G0WQ_Ly1QzLf-tUalRxTlFCQkVPmRpJKa270HfpLZ1RFSuAX8X4Gkae9pqhLttyJFRBk-Bxo3_QH9HsmLd9atMWJSqLc1xU0rprNzMaIIzGtyK2dIDoCPz7tfg8Hyh7kQ_FKJfV03B4D_ZS-B1kQyo545O7xwmEMA24H234IYN8byl_A4mczBeqER7vwo5kg0keJqf3FLXuts1qFtbIDHV",
    badge: null
  }
];

export const getProduct = (id) => {
  return products.find(p => p.id === id);
}
