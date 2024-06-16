import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 0;

	width: 80%;
	max-width: 800px;
	margin: 0 auto;

	background: #f8f8f8;

	> div {
		display: flex;
		flex-direction: row;
		align-items: end;
		justify-content: space-between;
		padding: 20px;

		gap: 10px;

		width: 80%;
		max-width: 370px;

		> div {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		> select {
			width: 80px;
			height: 30px;
		}
	}
`;

export const Label = styled.label`
	font-size: 1.2rem;
`;

export const Input = styled.input`
	width: 200px;
	height: 30px;
	padding: 10px;
	font-size: 1.1rem;

	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

export const ContainerButton = styled.section`
	display: flex;
	justify-content: end;

	width: 80%;
	padding: 0 20px;
`;

export const TrocaBotao = styled.button`
	padding: 10px;
`;
