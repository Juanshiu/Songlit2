import React from 'react';

interface FormattedDateProps {
 fechaNumerica: string;
}

const FormattedDate: React.FC<FormattedDateProps> = ({ fechaNumerica }) => {
 const partesFecha = fechaNumerica.split("-");
 const dia = partesFecha[0];
 const mes = partesFecha[1];
 const ano = partesFecha[2];

 const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 const nombreMes = meses[parseInt(mes) - 1];

 const fechaTextual = `${nombreMes} ${ano}, ${dia}`;

 return <div>{fechaTextual}</div>;
};

export default FormattedDate;
