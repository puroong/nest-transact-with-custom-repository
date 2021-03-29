import { EntityRepository, Repository } from 'typeorm';
import { CEntity } from './centity.entity';

@EntityRepository(CEntity)
export class CEntityRepository extends Repository<CEntity> {}
