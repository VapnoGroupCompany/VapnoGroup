"use client";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from "./ConactComponent.module.css";
import Image from "next/image";
function ContactComponent({contacTitle,contacttext1,contacttext2,
    contacttext3,require,submit,name,email,phone,letter,error}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = React.useState(false);
    // const apiForm2 = process.env.REACT_APP_API_URL_FORM_TWO
    const onSubmit = (data) => {
        setLoading(true);

        axios
            .post("/api/blogs", data)
            .then((response) => {
                if (response.status === 200) {
                    // Успішно відправлено форму
                    setLoading(false);
                    setTimeout(() => {
                        alert("Form submitted successfully!");
                    }, 1000);
                    reset(); // Очистка форми
                } else {
                    throw new Error(response.statusText);
                }
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); // Встановлюємо setLoading(false) при помилці
                setTimeout(() => {
                    alert("Form submission failed.");
                }, 1000);
            });
    };
    const showNotification = (message) => {
        // Перевірка чи браузер підтримує сповіщення
        if ("Notification" in window) {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification(message);
                }
            });
        }
    };
    return (
        <>
            <div className={styles.wrapper}>
                {loading ? (
                    <div className={styles.loaderContainer}>
                        <Image
                            width={250}
                            height={250}
                            src="/loading.gif"
                            alt="dmdedjm"
                        />
                    </div>
                ) : (
                    <div className={styles.content}>
                        <div className={styles.greyBlock}>
                            <h1 className={styles.h1}>{contacTitle}</h1>
                            <p className={styles.p}>
                               {contacttext1}
                            </p>
                            <p className={styles.p}>
                            {contacttext2}
                            </p>
                            <p className={styles.p}>
                            {contacttext3}
                            </p>
                        </div>
                        <form
                            className={styles.form}
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className={styles.item}>
                                <label className={styles.label} htmlFor="name">
                                  {name} <span>{(require)}</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && (
                                    <span style={{ color: "red" }}>
                                       {error}
                                    </span>
                                )}
                            </div>
                            <div className={styles.item}>
                                <label className={styles.label} htmlFor="email">
                                   {email} <span>{(require)}</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && (
                                    <span style={{ color: "red" }}>
                                       {error}
                                    </span>
                                )}
                            </div>
                            <div className={styles.item}>
                                <label className={styles.label} htmlFor="phone">
                                  {phone}  <span>{(require)}</span>
                                </label>
                                <input
                                    type="phone"
                                    id="phone"
                                    {...register("phone", { required: true })}
                                />
                                {errors.phone && (
                                    <span style={{ color: "red" }}>
                                       {error}
                                    </span>
                                )}
                            </div>
                            <div className={styles.item}>
                                <label
                                    className={styles.label}
                                    htmlFor="letter"
                                >
                                   {letter}<span>{(require)}</span>
                                </label>
                                <textarea
                                    className={styles.textarea}
                                    rows="4"
                                    cols="50"
                                    type="text"
                                    id="letter"
                                    {...register("letter", { required: true })}
                                />
                                {errors.letter && (
                                    <span style={{ color: "red" }}>
                                       {error}
                                    </span>
                                )}
                            </div>
                            <button className={styles.button} type="submit">
                               {submit}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}
export default ContactComponent;
