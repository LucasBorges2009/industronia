import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-situacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './situacao.html',
  styleUrls: ['./situacao.css']
})
export class Situacao {

  situacao = {
    titulo: 'Embargo Internacional e Colapso Industrial',

    descricao: 'Um embargo comercial internacional reduziu drasticamente as exportações de Industronia, atingindo diretamente sua principal base econômica. Com a queda na demanda externa, diversas fábricas foram obrigadas a encerrar suas atividades, desencadeando uma crise econômica e social em larga escala.',

    impactos: [
      {
        titulo: 'Queda nas Exportações',
        texto: 'A redução das vendas externas compromete gravemente a economia do país.'
      },
      {
        titulo: 'Fechamento de Fábricas',
        texto: 'Indústrias encerram operações devido à falta de demanda e prejuízos financeiros.'
      },
      {
        titulo: 'Desemprego em Massa',
        texto: 'Milhares de trabalhadores perdem seus empregos em curto período de tempo.'
      },
      {
        titulo: 'Crise Econômica',
        texto: 'A economia entra em recessão devido à dependência do mercado externo.'
      },
      {
        titulo: 'Instabilidade Social',
        texto: 'O aumento do desemprego gera tensões sociais e queda na qualidade de vida.'
      },
      {
        titulo: 'Redução de Investimentos',
        texto: 'Investidores reduzem aportes devido à incerteza econômica.'
      }
    ]
  };

}