import { Pipe, PipeTransform } from '@angular/core';
import { IMovies } from './movies';

@Pipe({
    name: 'movieFilter'
})

export class MovieFilters implements PipeTransform {
    transform(value: IMovies[], search: string): IMovies[] {
        search = search ? search.toLowerCase() : null;
        return search ? value.filter((movies: IMovies) =>
        movies.name.toLowerCase().indexOf(search) !== -1) : value;
    }
}
