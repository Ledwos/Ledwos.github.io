export type CareerSection =
  | 'university'
  | 'futureproof'
  | 'cognizant'
  | 'ubsconfluence'
  | 'nextsteps';

export interface PopupData {
  code: CareerSection;
  name: string;
  info: string;
  techStack: string[];
}

export const popupData: PopupData[] = [
  {
    code: 'university',
    name: 'University Of Southampton',
    info: 'MChem Chemistry. Intersted in tech so i used my final year project (Computational Chemistry) as a stepping stone into the tech world',
    techStack: ['Python'],
  },
  {
    code: 'futureproof',
    name: 'Futureproof Bootcamp',
    info: '13 week intensive full-stack course',
    techStack: [
      'HMTL',
      'CSS',
      'JavaScript',
      'JQuery',
      'Node',
      'React',
      'SQL',
      'Postgres',
      'Django',
    ],
  },
  {
    code: 'cognizant',
    name: 'Cognizant - Unilever',
    info: "Consultant based position. Developed React frontend for Unilever application with the aim of streamlining in house services for an improved 'product development' process.",
    techStack: ['JavaScript', 'React', 'HTML', 'CSS'],
  },
  {
    code: 'ubsconfluence',
    name: 'UBS / Confluence - Delta',
    info: 'Developing UBS Delta successor; an award winning portfolio analysis and risk management system',
    techStack: [
      'TypeScript',
      'React',
      'HTML',
      'CSS',
      'C#',
      '.Net',
      'Protobuf',
      'gRPC',
    ],
  },
  {
    code: 'nextsteps',
    name: 'The Future!',
    info: 'If you think you have an interesting role for me, get in touch!',
    techStack: [],
  },
];
