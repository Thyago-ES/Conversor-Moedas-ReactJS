import axios from "axios";
import { useEffect, useState } from "react";

import {
	Container,
	Label,
	Input,
	ContainerButton,
	TrocaBotao,
} from "./ConversorStyles";

export function Conversor() {
	const [valorConverter, setValorConverter] = useState(1);
	const [valorConvertido, setValorConvertido] = useState(0);
	const [moedaConverter, setMoedaConverter] = useState("usd");
	const [moedaConvertida, setMoedaConvertida] = useState("brl");

	const reverseMoedas = async () => {
		let aux = moedaConverter;
		setMoedaConverter(moedaConvertida);
		setMoedaConvertida(aux);
	};

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(
					`https://economia.awesomeapi.com.br/json/${moedaConverter}-${moedaConvertida}`
				);

				const conversionRate = Number(response.data[0]?.high);

				if (!isNaN(conversionRate)) {
					setValorConvertido((valorConverter * conversionRate).toFixed(2));
				} else {
					console.error("Invalid conversion rate: ", conversionRate);
				}
			} catch (error) {
				console.error(error);
			}
		};

		getData();
	}, [moedaConvertida, moedaConverter, valorConverter]);

	return (
		<Container>
			<div>
				<div>
					<Label htmlFor="converter">Digite o valor abaixo:</Label>
					<Input
						type="number"
						id="converter"
						value={valorConverter}
						onChange={(e) => setValorConverter(e.target.value)}
					/>
				</div>
				<select
					name="moedaConverter"
					id="moedaConverter"
					value={moedaConverter}
					onChange={(e) => setMoedaConverter(e.target.value)}
				>
					<option value="brl">BRL</option>
					<option value="usd">USD</option>
					<option value="eur">EUR</option>
				</select>
			</div>
			<ContainerButton>
				<TrocaBotao onClick={reverseMoedas}>Trocar</TrocaBotao>
			</ContainerButton>
			<div>
				<div>
					<Label htmlFor="convertido">Convertido:</Label>
					<Input type="number" value={valorConvertido} readOnly />
				</div>
				<select
					name="moedaConvertida"
					id="moedaConvertida"
					value={moedaConvertida}
					onChange={(e) => setMoedaConvertida(e.target.value)}
				>
					{moedaConverter !== "usd" && <option value="usd">USD</option>}
					{moedaConverter !== "brl" && <option value="brl">BRL</option>}
					{moedaConverter !== "eur" && <option value="eur">EUR</option>}
				</select>
			</div>
		</Container>
	);
}
