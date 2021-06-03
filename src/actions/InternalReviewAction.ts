import {IInternalReview} from "../entities/InternalReview";

export function findAllInternalReviews(): IInternalReview[] {
    return [
        {
            name: 'Operation times',
            entity: 'Renault corsa',
            location: 'France',
            expertise: '#Tax',
            date: '20/01/2020',
        },
        {
            name: 'Op. Prometheus',
            entity: 'Renault HQ',
            location: 'USA',
            expertise: '#Tax',
            date: '20/01/2020',
        },
        {
            name: 'Op. Latandre',
            entity: 'Renault brossa',
            location: 'France',
            expertise: '#Tax',
            date: '20/01/2020',
        },
    ];
}