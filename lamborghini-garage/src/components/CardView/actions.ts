import { Dispatch, SetStateAction } from "react";
import { CarModel } from "./props";
import { fetchGetCarData } from "../../api/getCars"; 

export const loadCarData = async (
    id: number, 
    setCarData: Dispatch<SetStateAction<CarModel | null>>
) => {
    try {
        const response = await fetchGetCarData(id);
        if (response != null) {
            setCarData(response);
        } else {
            console.log("Carro não encontrado.");
        }
    } catch (error) {
        console.log("Erro ao buscar da api", error);
    }
};


export const handlePreviousItem = async(
    carData: CarModel | null,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null >>
) =>{

    let response = null;
    try{
        if(carData && carData?.id > 1){
            response = await fetchGetCarData(carData.id - 1);
        }
        if(response != null){
            setCarData(response);
        }
        
    }catch(error){
        console.log("erro ao chamra a api", error);
        setCarData(null);
    }

};


export const handleNextItem = async(
    carData: CarModel | null,
    setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    try {
        if (carData) {
            const response = await fetchGetCarData(carData.id + 1);
            if (response != null) {
                setCarData(response);
            }
        }
    } catch (error) {
        console.log("Erro ao chamar a API:", error);
        setCarData(null);
    }
};

