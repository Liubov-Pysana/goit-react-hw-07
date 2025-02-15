import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://66a7e0a953c13f22a3d1573e.mockapi.io";

// Fetch all contacts
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${BASE_URL}/contacts`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

// Add a new contact
export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const response = await axios.post(`${BASE_URL}/contacts`, contact);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

// Delete a contact
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        await axios.delete(`${BASE_URL}/contacts/${id}`);
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
