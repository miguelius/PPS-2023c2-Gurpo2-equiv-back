import Carrera from '../models/carrera';
import { pick } from 'lodash';

export const getCarrera = async (req, res) => {
    console.log(getCarrera);
    const carreraid = req.params.id;
    const product = await Carrera.findByPk(carreraid);
    if (product) {
        res.json(product.toJSON());
    } else {
        res.status(404).json({ message: `Carrera ${carreraid} no encontrado` });
    }
};

export const index = async (req, res) => {
    const carrera = await Carrera.findAll({
        attributes: ['id', 'nombre_carrera', 'nombre_instituto', 'updatedAt'],
        where: { activo: 1 },
    });
    res.json({ data: carrera.map((carrera) => carrera.toJSON()) });
};

export const getTodasLasCarreras = async (req, res) => {
    const carrera = await Carrera.findAll({
        attributes: ['id', 'nombre_carrera', 'nombre_instituto', 'updatedAt'],
        where: { activo: 1 },
    });
    if (carrera.length > 0) {
        res.json(carrera.map((carrera) => carrera.toJSON()));
    } else {
        res.status(404).json({ message: `No hay carreras` });
    }
};