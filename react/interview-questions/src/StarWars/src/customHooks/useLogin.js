import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/actions/Account.action";
import axios from "../services/api";

const useLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validateForm = async () => {
    const { username, password } = formData;
    if (username !== "" && password !== "") {
      setLoading(true);
      try {
        const response = await axios.get(`https://swapi.dev/api/people/1/`);
        if (response?.data) {
          console.log(response.data);
          const { name, birth_year } = response.data;
          if (name === username && birth_year === password) {
            setWrongCredentials(false);
            dispatch(loginSuccess(response.data));
            navigate("/planet");
          } else {
            setWrongCredentials(true);
          }
        }
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  return {
    formData,
    loading,
    error,
    wrongCredentials,
    handleInputChange,
    handleFormSubmit,
  };
};

export default useLogin;
