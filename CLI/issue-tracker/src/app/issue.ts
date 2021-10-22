export interface Issue {  // Equivale al modelo, ya que indica los datos que se van a utilizar
    issueNo: number;
    title: string;
    description: string;
    priority: 'low' | 'high';
    type: 'Feature' | 'Bug' | 'Documentation';
    completed?: Date;

}
