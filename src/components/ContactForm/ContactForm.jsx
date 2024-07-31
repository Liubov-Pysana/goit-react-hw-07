import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

const ContactForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: "",
            number: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "Must be at least 3 characters")
                .max(50, "Must be 50 characters or less")
                .required("Required"),
            number: Yup.string()
                .min(3, "Must be at least 3 characters")
                .max(50, "Must be 50 characters or less")
                .required("Required"),
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(addContact(values));
            resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? <div className={css.error}>{formik.errors.name}</div> : null}

            <label htmlFor="number">Number</label>
            <input
                id="number"
                name="number"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
            />
            {formik.touched.number && formik.errors.number ? (
                <div className={css.error}>{formik.errors.number}</div>
            ) : null}

            <button type="submit" className={css.button}>
                Add Contact
            </button>
        </form>
    );
};

export default ContactForm;
