import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configuração do cliente Supabase
const supabaseUrl = 'https://vephlmnpafuazcovlntk.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log("Tentando conectar ao Supabase...");

// Teste de conexão
async function testConnection() {
  try {
    const { data, error } = await supabase
      .from('contact')
      .select('*')
      .limit(1);
    
    if (error) throw error;
    
    console.log('Conexão com o Supabase estabelecida com sucesso!');
    return true;
  } catch (err) {
    console.error('Erro ao conectar ao Supabase:', {
      message: err.message,
      code: err.code,
      details: err.details
    });
    return false;
  }
}

testConnection();

app.get("/dados", async (req, res) => {
  try {
    const result = await supabase
      .from('contact')
      .select('*');
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar dados");
  }
});

// Rota para enviar mensagem de contato
app.post("/contact", async (req, res) => {
  console.log("Recebendo requisição POST em /contact:", req.body);
  const { nome, email, texto } = req.body;

  try {
    console.log("Tentando inserir dados:", { nome, email, texto });
    const { data, error } = await supabase
      .from('contact')
      .insert([{ nome, email, texto }])
      .select()
      .single();
    
    if (error) throw error;

    console.log("Dados inseridos com sucesso:", data);
    res.json(data);
  } catch (err) {
    console.error("Erro ao salvar mensagem de contato:", err);
    res.status(500).json({ 
      error: "Erro ao salvar mensagem de contato", 
      details: err.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
