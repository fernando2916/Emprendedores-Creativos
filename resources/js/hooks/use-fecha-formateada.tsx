export const formatFecha = (fechaISO: string): string => {
    const fecha = new Date(fechaISO);
    const hoy = new Date();

    const normalizar = (f: Date) => new Date(f.getFullYear(), f.getMonth(), f.getDate());
    const f1 = normalizar(fecha);
    const f2 = normalizar(hoy);

    const diferenciaMs = f2.getTime() - f1.getTime();
    const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

    if (dias === 0) return 'Hoy';
    if (dias === 1) return 'Ayer';
    if (dias === 2) return 'Antier';
    if (dias < 7) return `Hace ${dias} días`;
    if (dias < 14) return 'Hace una semana';
    if (dias < 30) return `Hace ${Math.floor(dias / 7)} semanas`;

    const meses = Math.floor(dias / 30);
    if (meses < 12) return `Hace ${meses === 1 ? 'un mes' : `${meses} meses`}`;

    const años = Math.floor(dias / 365);
    return `Hace ${años === 1 ? 'un año' : `${años} años`}`;
};
