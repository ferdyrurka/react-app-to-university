import {IProposal} from "../entities/Proposal";

export function findAllProposals(): IProposal[] {
    return [
        {
            name: 'Operation times',
            entity: 'Renault corsa',
            location: 'France',
            expertise: '#Tax',
            date: '20/01/2020',
            firm: 'XYZ',
        },
        {
            name: 'Op. Prometheus',
            entity: 'Renault HQ',
            location: 'USA',
            expertise: '#M&A',
            date: '20/01/2019',
            firm: 'XYZ',
        },
        {
            name: 'Op. Latandre',
            entity: 'Renault brossa',
            location: 'Italia',
            expertise: 'Social',
            date: '20/01/2018',
            firm: 'Racine',
        },
    ];
}
