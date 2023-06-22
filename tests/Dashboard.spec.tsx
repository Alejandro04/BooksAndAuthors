import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Dashboard } from '../src/Dashboard';

describe('Dashboard', () => {
  test('Renderiza correctamente el título y el contenido', () => {
    render(<Dashboard />);
    
    const titulo = screen.getByText('Welcome to the library app');
    const contenido = screen.getByText('You can manage authors and their books');

    expect(titulo).toBeInTheDocument();
    expect(contenido).toBeInTheDocument();
  });

  test('Renderiza el componente Card', () => {
    render(<Dashboard />);
    
    const cardElement = screen.getByText('Welcome to the library app');

    expect(cardElement).toBeInTheDocument();
  });
});
