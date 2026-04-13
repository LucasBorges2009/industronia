import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curiosidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curiosidades.html',
  styleUrls: ['./curiosidades.css']
})
export class Curiosidades {

  curiosidades = [
    {
      titulo: '🏭 Produção em Massa',
      descricao: 'As fábricas operam continuamente com alta eficiência e grande volume de produção.'
    },
    {
      titulo: '📦 Exportação Global',
      descricao: 'Grande parte da produção é destinada ao mercado internacional.'
    },
    {
      titulo: '⚙️ Automação Industrial',
      descricao: 'Processos automatizados aumentam produtividade e reduzem custos.'
    },
    {
      titulo: '🏛️ Governo Populista',
      descricao: 'Foco em crescimento econômico e apoio popular através da indústria.'
    },
    {
      titulo: '⚠️ Baixo Investimento Social',
      descricao: 'Educação e saúde recebem menos recursos, gerando desafios sociais.'
    }
  ];

}