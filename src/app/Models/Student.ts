export interface Student {
    Id : number,
  name: string;
  className: string;
  gender: 'Male' | 'Female' | 'Other' | string;
  hobby: string;
  favoriteSubject: string;
}

export class StudentModel implements Student {
  constructor(
    public Id : number,
    public name: string,
    public className: string,
    public gender: 'Male' | 'Female' | 'Other' | string,
    public hobby: string,
    public favoriteSubject: string
  ) {}
}
