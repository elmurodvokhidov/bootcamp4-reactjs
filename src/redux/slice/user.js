import { createSlice } from "@reduxjs/toolkit";
import getUID from "uid-generator-package";

const initialState = {
    users: [
        {
            id: "ODgwNHNQVDMxMzkw8804sPT31390",
            img: "https://olcha.uz/image/266x266/products/supplier/stores/1/2023-09-13/KVD28D7GUC2bz9XYnFnNNWVXcWYaJJ8YLFUEUagp2Obr0bilgYH38sYcUKH2.jpg",
            name: "Apple iPhone 15 Pro",
            about: `Wide and bright screen for studying
            The 6.6" FHD+ display gives you plenty of space for your favorite movies, games and memories.
            
            Add color to your life
            Elegant, fundamental design. Available in black, light green, silver and dark red.
            
            Capture every side of your world
            Get outdoors and capture stunning landscapes with an ultra-wide camera and full color spectrum with the 50MP main camera. Take lifelike selfies with the 13MP front camera, or even take intimate photos with the macro camera.
            
            Charge every day with an octa-core processor
            Speed ​​up your day with the performance and efficiency of an octa-core processor and 64GB/128GB of built-in memory.
            
            Expand your memory with RAM Plus
            Your Galaxy A14 alleviates those handicapped situations while multitasking, giving you just the extra space you need.
            
            Take your worries away with a long-lasting battery
            From dawn to late at night, your Galaxy A14 will be by your side for work and play. 5000 mAh (typical)* battery gives you more time to do what you love.
            
            Side fingerprint sensor
            Your security double checked with a side-mounted fingerprint sensor only accessible by your fingerprint.
            
            One user interface
            Make your Samsung Galaxy more like you and make it work your way with One UI.
            
            Samsung members
            Get tips and tricks to unlock your device's full potential.`,
            price: 1200,
            discount: 15,
        },
        {
            id: "NjExMUZQajQ2OTc46111FPj46978",
            img: "https://olcha.uz/image/220x220/products/mdOb9kn6eSWgGetMZxVwDeQMWZQEO4PIxQH4hXXm9Gv0DKRulzTe1J8xend0.jpg",
            name: "Samsung Galaxy A14",
            about: `With new contoured edges, a new action button, a powerful camera upgrade, and a durable and lightweight titanium body, the A17 Pro delivers next-level performance and mobile gaming.
            CUPERTINO, CALIFORNIA Today Company Apple unveiled iPhone 15 Pro and iPhone 15 Pro Max, made from durable yet lightweight aerospace-grade titanium and the lightest Apple Pro models ever. The new design also features contoured edges and a customizable action button, allowing users to personalize their iPhone experience. Powerful camera upgrades include the equivalent of seven professional lenses with outstanding image quality, including an improved 48-megapixel main camera system that now supports the new 24-megapixel ultra-high definition standard, next-generation portraits with focus and depth control, at night. improvements and much more. Smart HDR mode and an all-new 5x Telephoto lens, only on iPhone 15 Pro Max. The A17 Pro brings a new level of gaming experience and professional performance. The new USB C connector supports USB 3 speeds (up to 20 times faster than USB 2) and enables powerful professional workflows never before possible, plus new video formats.1 And satellite roadside assistance. As a result, the iPhone 15 Pro lineup leverages Apple's innovative satellite infrastructure to connect and assist users when they encounter vehicle issues outside of the network.`,
            price: 800,
            discount: 15,
        },
    ],
    search: ""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addNewUser: (state, action) => {
            const user = action.payload;
            state.users = [...state.users, { ...user, id: getUID() }]
        },
        updateUser: (state, action) => {
            state.users = state.users.map(item => item.id === action.payload.id ? action.payload : item)
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(item => item.id !== action.payload)
        },
        searchUser: (state, action) => {
            console.log(action.payload);
            state.search = action.payload;
        }
    }
});

export const {
    addNewUser,
    updateUser,
    deleteUser,
    searchUser,
} = userSlice.actions;
export default userSlice.reducer;