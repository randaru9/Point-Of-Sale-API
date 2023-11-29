import { 
	Entity,
	Column,
	ManyToOne,
	JoinColumn
} from 'typeorm';

import { ParentEntity } from 'src/entity/parent';
import { AdminEntity } from 'src/user/admin/entity/admin.entity';
import { ProductEntity } from 'src/product/product/entity/product.entity';

export enum Mode {
	PLUS = 'plus',
	MIN = 'min'
}

@Entity('stock_record')
export class StockRecordEntity extends ParentEntity {
	@Column()
	value: string;

	@Column({ type: 'enum', enum: Mode, default: Mode.PLUS })
	mode: Mode;

	@ManyToOne(() => AdminEntity)
	@JoinColumn({ name: 'author' })
	author: AdminEntity;

	@ManyToOne(() => ProductEntity)
	@JoinColumn({ name: 'product' })
	product: ProductEntity;
}