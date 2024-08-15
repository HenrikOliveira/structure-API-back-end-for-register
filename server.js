import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

// Endpoint para criar um usuário
app.post('/usuarios', async (req, res) => {
    try {
        const newUser = await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age // Deve ser uma string
            }
        });
        res.status(201).json(newUser);
    } catch (error) {
        if (error.code === 'P2002') {
            res.status(409).json({ error: 'Email já cadastrado!' });
        } else {
            res.status(500).json({ error: 'Erro ao criar usuário' });
        }
    }
});

// Endpoint para listar todos os usuários
app.get('/usuarios', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Ocorreu um erro ao buscar os usuários.', details: error.message });
    }
});

// Endpoint para atualizar um usuário
app.put('/usuarios/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age // Deve ser uma string
            }
        });

        res.status(200).json(updatedUser);
    } catch (error) {
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'Usuário não encontrado!' });
        } else {
            res.status(500).json({ error: 'Erro ao atualizar usuário', details: error.message });
        }
    }
});

// Endpoint para deletar um usuário
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        if (!userId || userId.trim() === '') {
            return res.status(400).json({ error: 'ID inválido' });
        }

        await prisma.user.delete({
            where: { id: userId }
        });
        res.status(204).send();
    } catch (error) {
        if (error.code === 'P2025') {
            res.status(404).json({ error: 'Usuário não encontrado!' });
        } else {
            res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

