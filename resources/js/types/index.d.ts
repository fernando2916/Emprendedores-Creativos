import { ReactNode } from 'react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface Categoria {
    id: number;
    nombre: string;
    tipo: string;
    created_at: string;
    updated_at: string;
}

export interface Glosario {
    id: number;
    nombre: string;
    descripcion: string;
    created_at: string;
    updated_at: string;
}

export interface Vacante {
    id: number;
    puesto: string;
    modalidad: string;
    horario: number;
    salario: number;
    identificador: string;
    postulacion: number;
    descripcion: string;
    requisitos: string;
    updated_at: number;

}

export interface Post {
    id: number;
    titulo: string;
    imagen: string;
    descripcion_corta: string;
    slug: string;
    contenido: string;
    tiempo_de_lectura: number;
    estado: string;
    categoria: {
        id: number
        nombre: string;
     } | null
    autor: {
        id: number
        name: string
        last_name: string
  } | null
    created_at: string;
    updated_at: string;
}


export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: ReactNode | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    last_name: string;
    email: string;
    password: string;
    verification_code: number;
    verification_code_expires_at: string;
    is_verified: string;
    verification_id: number;
    // avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    roles?: string[];
    permissions?: string[];
    [key: string]: unknown; // This allows for additional properties...
}


