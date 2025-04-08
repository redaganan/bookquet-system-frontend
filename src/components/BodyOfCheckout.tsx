import { DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { upload } from "../api/upload";

export default function DateCalendarValue() {
	const [value, setValue] = useState<Dayjs | null>(dayjs());
	const location = useLocation();
    const navigate = useNavigate();
	const selectedFlowers = location.state as { name: string; price: number }[]; // Get the selected flowers from the location state

	const handleCheckout = async (value: Dayjs | null) => {
		const name = (document.getElementById("name") as HTMLInputElement)
			.value;
		const email = (document.getElementById("email") as HTMLInputElement)
			.value;
		const contact = (document.getElementById("contact") as HTMLInputElement)
			.value;

		const formData = {
			name: name,
			email: email,
			contact: contact,
			date: value?.format("YYYY-MM-DD"),
		};

		const filteredFlowers = selectedFlowers.map(({ name, price }) => ({
			name,
			price,
		}));
		const totalPrice = filteredFlowers.reduce(
			(sum, flower) => sum + flower.price,
			0
		); // Calculate total price

		const combinedData = {
			...formData,
			selectedFlowers: filteredFlowers,
			totalPrice: totalPrice, // Add total price to the data
		};

		console.log("Form Data:", combinedData); // Log the form data to the console

		// Make a POST request to the server with the form data
		try {
			const response = await upload("http://localhost:4000/api/upload", combinedData);
            console.log("Response:", response); // Log the server response to the console
			// alert("Checkout successful!"); // Show success message
		} catch (error) {
			alert("Checkout failed. Please try again later."); // Show error message
		}
        navigate("/exit"); // Navigate to the exit page after checkout
	};

	return (
		<div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
			<h2 style={{ color: "black", textAlign: "center" }}>
				Set your pick-up date:
			</h2>
			<style>
				{`
          .MuiDateCalendar-root {
            background-color: black !important;
            color: white !important;
          }
          .MuiPickersDay-root {
            color: white !important;
          }
          .MuiPickersArrowSwitcher-root button {
            color: white !important;
          }
          .MuiDayCalendar-weekDayLabel {
            color: white !important;
          }
        `}
			</style>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DemoContainer
						components={["DateCalendar", "DateCalendar"]}
					>
						<DemoItem>
							<DateCalendar
								value={value}
								onChange={(newValue) => setValue(newValue)}
							/>
						</DemoItem>
					</DemoContainer>
				</LocalizationProvider>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "10px",
				}}
			>
				<div
					style={{
						backgroundColor: "#f9f9f9",
						padding: "20px",
						borderRadius: "8px",
						boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
						width: "300px",
					}}
				>
					<label style={{ marginBottom: "10px", display: "block" }}>
						Name:
						<input
							type="text"
							id="name"
							style={{
								margin: "5px 0",
								padding: "10px",
								width: "100%",
								border: "1px solid #ccc",
								borderRadius: "4px",
							}}
						/>
					</label>
					<label style={{ marginBottom: "10px", display: "block" }}>
						Email Address:
						<input
							type="email"
							id="email"
							style={{
								margin: "5px 0",
								padding: "10px",
								width: "100%",
								border: "1px solid #ccc",
								borderRadius: "4px",
							}}
							required
						/>
					</label>
					<label style={{ marginBottom: "10px", display: "block" }}>
						Contact Number:
						<input
							type="tel"
							id="contact"
							style={{
								margin: "5px 0",
								padding: "10px",
								width: "100%",
								border: "1px solid #ccc",
								borderRadius: "4px",
							}}
						/>
					</label>
					<button
						onClick={() => handleCheckout(value)}
						style={{
							marginTop: "10px",
							padding: "10px",
							width: "100%",
							backgroundColor: "#007BFF",
							color: "white",
							border: "none",
							borderRadius: "4px",
							cursor: "pointer",
						}}
					>
						Check Out
					</button>
				</div>
			</div>
		</div>
	);
}
