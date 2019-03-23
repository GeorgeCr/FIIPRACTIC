import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AriasService {
  ariaCategory: any;
  constructor() { }

  getArias() {
    return [
      {
        name: ['.NET'],
        image: '/assets/images/thumbnail32.png',
        stack: 'Fullstack Development',
        description: 'A Full Stack Developer is someone with familiarity in each layer, ' +
          'if not mastery in many and a genuine interest in all software technology.',
        category: 'fullstack'
      },
      {
        name: ['Angular', 'HTML', 'JavaScript', 'React'],
        image: '/assets/images/thumbnail33.png',
        stack: 'Frontend Development',
        description: 'Front-end este partea de development a elementelor vizibile si interactive din browser',
        category: 'frontend',
        longDescription: 'Când discutăm de Front-End pe web, vorbim de fapt despre o parte a web-ului pe care o poți vedea și cu care poți\n' +
          '      interacționa. Acesta este compusă de obicei din două părți : web design și front end web development.\n' +
          '\n' +
          '      În trecut când cineva discuta despre development se raporta în general la Back-End, dar în ultimii ani a apărut o\n' +
          '      adevărată nevoie de a diferenția designerii care lucrau strict în Photoshop de cei care scriu cod in HTML și CSS.\n' +
          '      Lucrurile au mers chiar mai departe când designerii au început să lucreze cu Javascript și jQuery.\n' +
          '\n' +
          '      Astfel, când discutăm astăzi despre termenul de "web design", de fapt vorbim despre aceia care lucrează cu Photoshop\n' +
          '      si Fireworks și despre aceia care lucrează folosind HTML, CSS Javascript sau jQuery.\n' +
          '\n' +
          '      Tot ce vedeți când folosiți web-ul este o combinație între HTML, CSS și Javascript, totul fiind controlat de\n' +
          '      browser-ul dumneavoastră. Aici sunt incluse și lucruri precum fonturi, meniuri, butoane, tranziții, slidere,\n' +
          '      formulare de contactare etc.\n' +
          '\n' +
          '      Acum, pentru ca toate astea să devină realitate și pentru a putea stoca informația introdusă in elementele de Front\n' +
          '      End, avem nevoie de o alta tehnologie. Aici intră partea de Back-End.'
      },
      {
        name: ['.NET', 'PHP', 'Java', 'Scala'],
        image: '/assets/images/thumbnail32.png',
        stack: 'Backend Development',
        description: 'Tehnologiile back-end sunt constituite din limbaje precum PHP, Java, C#',
        category: 'backend',
        longDescription: 'Partea de back-end conține, în mod general, trei părți: un server, o aplicație și o bază de date. Spre exemplu, dacă doriți să cumpărați un bilet de avion, sau un bilet la concert, veți deschide o pagină web și veți interacționa cu partea de front-end. Odată ce ați introdus informațiile necesare, aplicația va reține aceste date într-o bază de date creată pe acel server. Pentru a vizualiza asta mai ușor, imaginați-vă o bază de date ca un tabel Excel de dimensiuni mari pe PC-ul dumneavoastră, dar calculatorul (server-ul) se află în alt oraș.\n' +
          '\n' +
          'Toate acele informații sunt păstrate pe server, așa că atunci când revizitați aplicația pentru a vă printa biletele, toate datele sunt acolo în contul dumneavoastră.\n' +
          '\n' +
          'Numim persoana care face aceste tehnologii să funcționeze împreună, back-end developer. Tehnologiile back-end sunt constituite din limbaje precum PHP, JAVA, .NET, Ruby, Python etc. Pentru a fi mai ușor de folosit, de multe ori sunt utilizate împreună cu framework-uri precum Ruby on Rails, Cake PHP sau Code Igniter. Toate aceste tehnologii fac development-ul mult mai rapid și mai ușor.'
      },
      {
        name: ['Game dev'],
        image: '/assets/images/thumbnail32.png',
        stack: 'Game Development',
        description: 'Whether you are passionate about coding or about gaming, it/`s time to explore.',
        category: 'gamedev'
      },
      {
        name: ['Web Design'],
        image: '/assets/images/thumbnail32.png',
        stack: 'Web Design',
        description: 'Design-ul grafic implică foarte multă creativitate și un plan sistematic.',
        category: 'webdesign'
      },
      {
        name: ['Soft skills'],
        image: '/assets/images/thumbnail32.png',
        stack: 'Soft skills',
        description: 'Soft skills sunt o combinație de abilități sociale, abilități de comunicare și multe altele.',
        category: 'softskills'
      }
    ];
  }
  setAriaCategory(ariaCategory) {
    this.ariaCategory = ariaCategory;
  }
  getAriaCategory() {
    return this.ariaCategory;
  }
}
