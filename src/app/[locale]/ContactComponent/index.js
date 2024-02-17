"use client";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from "./ConactComponent.module.css";
import Image from "next/image";
function ContactComponent({contacTitle,contacttext1
 ,error,submit,name,email,phone,region,region1,region2,region3,region4,region5,region6,
    region7,region8,region9,region10,region11,region12,region13,region14,region15,region16,region17,region18,
    region19,region20,region21,region22,region23,region24,region25,
}) {
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
                            width={200}
                            height={200}
                            src="/loading.gif"
                            alt="dmdedjm"
                        />
                    </div>
                ) : (
                    <div className={styles.content}>
                        {/* <div className={styles.greyBlock}>
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
                        </div> */}
                        <form
                            className={styles.form}
                            onSubmit={handleSubmit(onSubmit)}
                        >
                             <div className={styles.head}>

                            <h3 className={styles.formTitle}>{contacTitle}</h3>
                            <p className={styles.formDescr}>{contacttext1}</p>
                            </div>
                              <div className={styles.items}>
                             <div className={styles.itemsSide}>
                            <div className={styles.item}>
                                {/* <label className={styles.label} htmlFor="name">
                                  {name} <span>{(require)}</span>
                                </label> */}
                                <input
                                    placeholder={name}
                                    type="text"
                                    id="name"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && (
                                   <span style={{ color: "red", paddingTop:"5px" }}>
                                       {error}
                                    </span>
                                )}
                            </div>
                            <div className={styles.item}>
                                {/* <label className={styles.label} htmlFor="email">
                                   {email} <span>{(require)}</span>
                                </label> */}
                                <input
                                    placeholder={email}
                                    type="email"
                                    id="email"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && (
                                   <span style={{ color: "red", paddingTop:"5px" }}>
                                       {error}
                                    </span>
                                )}
                            </div>
                            </div>
                            <div className={styles.itemsSide}>
                            <div className={styles.item}>
                                {/* <label className={styles.label} htmlFor="phone">
                                  {phone}  <span>{(require)}</span>
                                </label> */}
                                <input
                                   placeholder={phone}
                                    type="phone"
                                    id="phone"
                                    {...register("phone", { required: true })}
                                />
                                {errors.phone && (
                                   <span style={{ color: "red", paddingTop:"5px" }}>
                                       {error}
                                    </span>
                                )}
                            </div>
                            <div className={styles.item}>
                                {/* <label
                                    className={styles.label}
                                    htmlFor="letter"
                                >
                                   {letter}<span>{(require)}</span>
                                </label> */}
                                <select
  className={styles.select}
  id="region"
  {...register("region", { required: true })}
>
<option value="">{region}</option>
  <option value={region1}>{region1}</option>
  <option value={region2}>{region2}</option>
  <option value={region3}>{region3}</option>
  <option value={region4}>{region4}</option>
  <option value={region5}>{region5}</option>
  <option value={region6}>{region6}</option>
  <option value={region7}>{region7}</option>
  <option value={region8}>{region8}</option>
  <option value={region9}>{region9}</option>
  <option value={region10}>{region10}</option>
  <option value={region11}>{region11}</option>
  <option value={region12}>{region12}</option>
  <option value={region13}>{region13}</option>
  <option value={region14}>{region14}</option>
  <option value={region15}>{region15}</option>
  <option value={region16}>{region16}</option>
  <option value={region17}>{region17}</option>
  <option value={region18}>{region18}</option>
  <option value={region19}>{region19}</option>
  <option value={region20}>{region20}</option>
  <option value={region21}>{region21}</option>
  <option value={region22}>{region22}</option>
  <option value={region23}>{region23}</option>
  <option value={region24}>{region24}</option>
  <option value={region25}>{region25}</option>
  
</select>
{errors.region && (
  <span style={{ color: "red", paddingTop:"5px" }}>
    {error}
  </span>
)}
                            </div>
                            </div>
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
