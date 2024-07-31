import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    };

    return (
        <li className={css.liItem}>
            <p>Name: {name}</p>
            <p>Number: {number}</p>
            <button className={css.deleteButton} onClick={handleDelete}>
                Delete
            </button>
        </li>
    );
};

export default Contact;
