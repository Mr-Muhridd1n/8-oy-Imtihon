import React from "react";
import { useDatabase } from "../hooks/useDatabase";

export const Panel = () => {
  const { postData, data } = useDatabase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const _form = new FormData(e.target);

    const title = _form.get("title");
    const overview = _form.get("overview");
    const servings = +_form.get("servings");
    const prepMinutes = +_form.get("prepMinutes");
    const cookMinutes = +_form.get("cookMinutes");
    let ingredients = _form.get("ingredients");
    let instructions = _form.get("instructions");

    ingredients = ingredients.split(",");
    instructions = instructions.split(",");
    let slug = title.replace(" ", "-");

    const imgForm = new FormData();
    imgForm.append("file", _form.get("img"));
    imgForm.append("upload_preset", "images");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dkrwrkdv9/image/upload",
      {
        method: "POST",
        body: imgForm,
      }
    );
    const imgData = await res.json();

    const newPost = {
      title,
      slug,
      image: { large: imgData.secure_url },
      overview,
      servings,
      prepMinutes,
      cookMinutes,
      ingredients,
      instructions,
    };

    await postData("/recipes", newPost);
    alert("Maxsulot yuklandi !");
  };

  return (
    <section className="panel">
      <div className="align-elements panel__container">
        <h1>Mahsulot qo'shish uchun formalarni to'ldiring !</h1>
        <form className="panel__form" action="" onSubmit={handleSubmit}>
          <label htmlFor="title">Mahsulotni nomini kiriting</label>
          <input type="text" name="title" placeholder="title" />
          <label htmlFor="overview">
            Mahsulot haqida qisqacha ma'lumot kiriting
          </label>
          <input type="text" name="overview" placeholder="overview" />
          <label htmlFor="img">Mahsulot rasmini yuklang</label>
          <input type="file" accept="image/*" name="img" placeholder="image" />
          <label htmlFor="servings">Mahsulot necha kishi uchun ?</label>
          <input type="number" name="servings" />
          <label htmlFor="prepMinutes">
            Mahsulot tayyorgarlik uchun ketadigan vaqt
          </label>
          <input type="number" name="prepMinutes" />
          <label htmlFor="cookMinutes">
            Tayyorlanishiga qancha vaqt ketadi
          </label>
          <input type="number" name="cookMinutes" />
          <label htmlFor="ingredients">Ketadigan mahsulotlar royhati !</label>
          <textarea
            name="ingredients"
            aria-multiline={true}
            placeholder="ingredients"
          />
          <label htmlFor="instructions">Korsatmalarni kiriting !</label>
          <textarea name="instructions" placeholder="instructions" />
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};
