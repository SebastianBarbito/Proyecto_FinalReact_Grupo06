// hooks/useAutorizacion.js
import { useContext } from 'react';
import { AutorizacionContext } from '../Context/AutorizacionContext';

export const useAutorizacion = () => useContext(AutorizacionContext);
