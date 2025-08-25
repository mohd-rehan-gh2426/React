# Currency Converter React App

A simple **React** currency converter that allows users to convert an amount from one currency to another in real-time. The app fetches live currency rates from an external API and provides a clean, responsive UI.

---

## **Features**

- Convert currencies between different types (e.g., USD → INR).  
- Swap "From" and "To" currencies easily with a button.  
- Real-time currency conversion using an external API.  
- Responsive and visually appealing UI with Tailwind CSS.  
- Reusable `InputBox` component for amounts and currency selection.  

---

## **Tech Stack**

- **Frontend:** React, Tailwind CSS  
- **Hooks:** Custom React hook `useCurrencyInfo` for fetching currency data  
- **API:** [Currency API](https://2024-03-06.currency-api.pages.dev/)  

---

![App Screenshot](public/image.png)

---

## **Project Structure**

```
src
├── App.jsx # Main application component
├── components
│ └── InputBox.jsx # Reusable input component for amount & currency
└── hooks
└── useCurrencyInfo.js # Custom hook to fetch currency data
```
---

## Usage

1. Enter the **amount** in the "From" field.  
2. Select the **source currency** and **target currency**.  
3. Click **Convert** to see the converted amount.  
4. Use the **Swap** button to switch the "From" and "To" currencies instantly.

---

## Components

### InputBox.jsx

A reusable input component for entering an amount and selecting a currency.

**Props:**

- `label`: Label for the input ("From" or "To")  
- `amount`: Current amount value  
- `onAmountChange`: Callback for amount change  
- `currencyOptions`: Array of available currencies  
- `selectCurrency`: Currently selected currency  
- `onCurrencyChange`: Callback for currency selection  
- `amountDisable`: Disable amount input (for "To" input)  
- `currencyDisable`: Disable currency select  

### useCurrencyInfo.js

Custom hook that fetches currency conversion rates.

- Takes a `currency` code as input and returns an object with rates relative to that currency.  


