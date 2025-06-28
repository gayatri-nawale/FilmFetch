

https://github.com/user-attachments/assets/eb9a1e21-e3e5-4697-901c-c6070d14f3e2

# 🎬 FilmFetch

**FilmFetch** is a modern, responsive web app built with **React** and **Vite** that lets users **search**, **browse popular movies**, and **like/favorite** titles using The Movie Database (TMDb) API.

---

## 🚀 Features

- 🔍 Search movies by title  
- 🌟 View currently popular movies  
- ❤️ Like/unlike movies and save them to *Favorites*  
- 📄 Dedicated Favorites page  
- 💾 Persistent likes using `localStorage`  
- 🎨 Responsive UI with Tailwind CSS  
- ⚡ Lightning-fast development with Vite  

---

## 🖥️ Live Demo

🌐 [Video](https://github.com/user-attachments/assets/eb9a1e21-e3e5-4697-901c-c6070d14f3e2)  


---

## 🛠️ Tech Stack

- **Framework:** React (via Vite)
- **Styling:** Tailwind CSS
- **API:** [TMDb](https://developers.themoviedb.org/3)
- **Dev Tools:** Vite, ESLint, Prettier

---

## 📦 Getting Started

### 🔧 Prerequisites

- Node.js v14 or later
- npm or yarn

### ⚙️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gayatri-nawale/FilmFetch.git
   cd FilmFetch
2. **Install Dependancies:**
   
   ```bash
   npm install
   # or
   yarn install
3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev.
   ```
## 📁 Project Structure

```bash
FilmFetch/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── css/                # Tailwind and custom styles
│   ├── pages/              # Home and Favorites pages
│   ├── App.jsx             # Main application
│   └── main.jsx            # Entry point
├── .env                    # Environment variables
├── package.json            # Project metadata
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

---

## 📈 Usage

- On launch, the homepage displays popular movies from TMDb.
- Use the **search bar** to find movies by title.
- Click the **❤️ icon** to like/unlike a movie.
- Go to the **Favorites** page to see saved movies.
- Liked movies are stored in the browser via **localStorage**.

---

## 🧩 Future Enhancements

- [ ] Individual movie detail pages (cast, synopsis, trailer)
- [ ] Pagination or infinite scroll
- [ ] Genre and release year filters
- [ ] Light/Dark mode toggle
- [ ] User authentication and cloud sync (e.g., Firebase)
- [ ] Unit tests using React Testing Library

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. Create your branch:

```bash
git checkout -b feature/my-feature
```

3. Commit your changes:

```bash
git commit -m "feat: add my feature"
```

4. Push to GitHub:

```bash
git push origin feature/my-feature
```

5. **Open a Pull Request** for review.

---

## 📚 License

This project is licensed under the **MIT License**.

---

## 🙋‍♀️ Author

**Gayatri Nawale**

🔗 [GitHub Profile](https://github.com/)

> Powered by React + Vite + TailwindCSS + TMDb API
