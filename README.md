
# Design System @mylena-silva/my-ds

> Sistema de Design criado para fins de aprendizado, estudo e uso interno. Já publicado como pacote npm.

## ✨ Objetivo

Este projeto reúne componentes reutilizáveis de interface, seguindo boas práticas de design e desenvolvimento, para acelerar a criação de aplicações React.

## 📦 Instalação

Pré-requisito: [pnpm](https://pnpm.io/installation)

```bash
pnpm add @mylena-silva/my-ds
```

## � Uso básico

Importe e utilize os componentes no seu projeto React:

```tsx
import { ContainedButton, OutlinedButton, Snackbar, Dialog, TextField, Navbar } from '@mylena-silva/my-ds';

function App() {
	return (
		<>
			<ContainedButton>Salvar</ContainedButton>
			<OutlinedButton>Cancelar</OutlinedButton>
			<TextField label="Nome" />
			<Snackbar open type="success" message="Ação realizada!" />
			<Dialog open titleItem="Título" contentItem="Conteúdo" />
			<Navbar />
		</>
	);
}
```

Consulte as [stories do Storybook](https://design-system-five-theta.vercel.app/?path=/docs/colors--docs) para exemplos visuais e documentação de cada componente.

## 🛠️ Tecnologias

- React
- styled-components
- MUI (Material UI)
- Storybook
- pnpm

## 📚 Componentes disponíveis

- **Button**: Contained, Outlined
- **Feedback**: Dialog, Snackbar
- **Input**: Checkbox, Radio, Select, Switch, TextField
- **Form**: Form
- **Navigation**: Navbar

---

<div align="center">
  <b>Feito por Mylena Oliveira</b>
</div>
