import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInvestments } from "../redux/store";


const fetchInvestmentData = async () => {
    const dispatch = useDispatch();

    try {
      const response = await fetch('http://localhost:3001/investmentData');
      const data = await response.json();
      console.log(data);
      dispatch(setInvestments(data));
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchInvestmentData();
    };

    fetchData();
  }, []);