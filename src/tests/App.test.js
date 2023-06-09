import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWith';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';
import App from '../App';
import WalletForm from '../components/WalletForm';

describe('Verifica tela de login', () => {
  test('Verifica página de login', () => {
    renderWithRouter(<Login />);
    const titleElement = screen.getByRole('heading', { level: 1, name: /login/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('Verifica se possui o botão para entrar', () => {
    renderWithRouter(<Login />);
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeInTheDocument();
  });

  test(
    'Teste se é renderizado carteira',
    () => {
      renderWithRouter(<App />);
      const button = screen.getByRole('button', { name: /entrar/i });
      userEvent.type(Email, 'dddd@ddd.com');
      userEvent.type(Password, 'password');
      userEvent.click(button);
      const carteira = screen.getByRole('heading', { level: 2, name: /walletform/i });
      expect(carteira).toBeInTheDocument();
    },
  );
});

describe('Verifica tela da carteira', () => {
  test('Verifica página da carteira', () => {
    renderWithRouter(<Wallet />);
    const walletlement = screen.getByRole('heading', { level: 2, name: /walletform/i });
    expect(walletlement).toBeInTheDocument();
  });
});
// Teste abaixo tive auxílio do Rafael Miranda
describe('Verifica se chama botão despesa', () => {
  test('Verifica se despesa é adicionada', () => {
    renderWithRouter(<WalletForm />);
    const inputValue = screen.getByTestId('value-input');
    const inputDescription = screen.getByTestId('description-input');
    const buttonAddDespesa = screen.getByRole('button', { name: /Adicionar/i });

    userEvent.type(inputValue, '4000');
    userEvent.type(inputDescription, 'Algo');
    userEvent.click(buttonAddDespesa);
  });
});
