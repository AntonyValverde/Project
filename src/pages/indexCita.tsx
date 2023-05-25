import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react';
import Calendar from '@/components/Calendar';

const inter = Inter({ subsets: ['latin'] })

export default function indexCita() {
  const data = [

    { Id_unidad: 1, Modelo: 'Rav4', Marca: 'Toyota', Año: 2000, Placa: 12345, Estado: 'excelente', Capacidad: "fuerte", Color: 'Rojo' },
    { Id_unidad: 2, Modelo: 'Rav4', Marca: 'Toyota', Año: 2000, Placa: 12345, Estado: 'excelente', Capacidad: "fuerte", Color: 'Rojo' },
    { Id_unidad: 3, Modelo: 'Rav4', Marca: 'Toyota', Año: 2000, Placa: 12345, Estado: 'excelente', Capacidad: "fuerte", Color: 'Rojo' },
    { Id_unidad: 4, Modelo: 'Rav4', Marca: 'Toyota', Año: 2000, Placa: 12345, Estado: 'excelente', Capacidad: "fuerte", Color: 'Rojo' },
    { Id_unidad: 5, Modelo: 'Rav4', Marca: 'Toyota', Año: 2000, Placa: 12345, Estado: 'excelente', Capacidad: "fuerte", Color: 'Rojo' },

  ];
  return (
    <>
      <div className='tablee'>
        <Calendar data={data} />
      </div>
    </>

  )
}