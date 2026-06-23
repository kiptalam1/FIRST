import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';

@Injectable()
export class DogsService {
  private readonly dogs: CreateDogDto[] = [];

  create(dog: CreateDogDto) {
    this.dogs.push(dog);
  }

  findAll(): CreateDogDto[] {
    return this.dogs;
  }
}
