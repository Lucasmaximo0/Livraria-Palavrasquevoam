import { escolaLocationImage, feiraLocationImage, shoppingLocationImage } from '../../../shared'

export const locations = [
  {
    id: 'escola',
    tag: 'Nas escolas',
    title: 'Feira literária dentro da rotina escolar',
    description:
      'Levamos livros, contação de histórias e mediação de leitura para turmas, professores e famílias.',
    audience: 'Público: alunos, professores e famílias.',
    image: escolaLocationImage
  },
  {
    id: 'feira-livre-praca',
    tag: 'Nas feiras livres e praças',
    title: 'Leitura acessível para toda a comunidade',
    description:
      'Montamos uma livraria itinerante em áreas abertas com acervo para diferentes idades e interesses.',
    audience: 'Público: crianças, jovens, adultos e visitantes da região.',
    image: feiraLocationImage
  },
  {
    id: 'shopping',
    tag: 'Nos shoppings',
    title: 'Espaço de leitura para famílias e visitantes',
    description:
      'Criamos um ponto cultural com livros infantis, juvenis e para pais que desejam incentivar a leitura.',
    audience: 'Público: famílias e visitantes do shopping.',
    image: shoppingLocationImage
  }
]
