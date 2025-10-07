import { BrandCategory } from '../categories';
import { Author, getCredit } from '../credits';
import { IBrand } from '../type';

export const Dart = {
  name: 'Dart',
  aliases: ['dartlang'],
  logos: [
    {
      url: '/DownloadedLogos/Dart/Dart.png',
      credit: getCredit(Author.Lexedia),
      type: 'default',
    },
  ],
  categories: [BrandCategory.LANGUAGE],
} satisfies IBrand;
