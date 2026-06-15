export enum PaymentStatus {
  PENDING = 'pending',
  VERIFYING = 'verifying',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}

export interface PaymentProps {
  id?: string;
  orderId: string;
  tenantId: string;
  amount: number;
  status: PaymentStatus;
  proofUrl?: string; // URL de la imagen del comprobante (S3)
  externalReference?: string; // Para futura integración con MP
  createdAt?: Date;
  updatedAt?: Date;
}

export class Payment {
  constructor(private props: PaymentProps) {
    this.props.status = props.status || PaymentStatus.PENDING;
    this.props.createdAt = props.createdAt || new Date();
  }

  public approve() {
    this.props.status = PaymentStatus.APPROVED;
    this.props.updatedAt = new Date();
  }

  public reject() {
    this.props.status = PaymentStatus.REJECTED;
    this.props.updatedAt = new Date();
  }

  public toJSON() { return { ...this.props }; }
  public get tenantId() { return this.props.tenantId; }
}