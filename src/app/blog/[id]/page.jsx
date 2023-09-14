import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Elle Hughes</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/33152/european-rabbits-bunnies-grass-wildlife.jpg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          unde odit culpa consequuntur aperiam, libero aut sint eveniet in dicta
          necessitatibus recusandae laboriosam delectus beatae excepturi veniam
          saepe nemo accusamus quam explicabo, cum debitis et distinctio
          doloremque! Dicta iure distinctio alias debitis fugiat autem quo rem,
          id cumque! Nulla, explicabo quas, perferendis enim minus distinctio
          cumque aliquam accusamus ratione quibusdam esse dicta quod qui.
          Quaerat fugit obcaecati a alias similique nemo nobis aliquam veniam
          amet labore dolores veritatis, ullam natus nesciunt doloribus autem
          eligendi possimus consectetur accusamus eveniet consequuntur velit
          quas perspiciatis qui? Ducimus, deleniti ipsum non laborum tenetur
          ratione ipsa magni ipsam doloremque! Assumenda nostrum magnam voluptas
          possimus dignissimos laboriosam vitae odio, doloribus quaerat fugit
          reiciendis, ratione hic illum reprehenderit nobis impedit minima dolor
          obcaecati officia placeat porro quis ipsa perspiciatis nisi?
          Perspiciatis saepe modi quae est! Perspiciatis, temporibus magnam, cum
          aut laboriosam, fugit ad reiciendis tempore animi adipisci maxime
          repellendus ullam nemo natus quis necessitatibus. Aspernatur, cumque,
          reprehenderit eaque accusantium eum doloremque veritatis saepe quod
          ducimus est optio. Numquam, ex accusantium voluptate laborum
          temporibus dolorem minus alias ad qui delectus iusto dolores sit
          inventore, hic eius! Aliquam, doloremque ipsum excepturi ea nostrum
          architecto quaerat quia magnam nemo voluptate!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
