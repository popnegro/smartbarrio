export interface CustomerProps {
  id?: string;
  tenantId: string;
  firstName: string;
  lastName?: string;
  email?: string;
  phone?: string;
  tags: string[];
  metadata?: Record<string, any>;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Customer {
  private props: CustomerProps;

  constructor(props: CustomerProps) {
    this.props = {
      ...props,
      tags: props.tags || [],
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
    };
  }

  public get id() { return this.props.id; }
  public get tenantId() { return this.props.tenantId; }
  public get firstName() { return this.props.firstName; }
  public get lastName() { return this.props.lastName; }
  public get email() { return this.props.email; }
  public get phone() { return this.props.phone; }
  public get tags() { return this.props.tags; }
  public get metadata() { return this.props.metadata; }
  public get createdAt() { return this.props.createdAt; }
  public get updatedAt() { return this.props.updatedAt; }

  public updateName(firstName: string, lastName?: string) {
    this.props.firstName = firstName;
    this.props.lastName = lastName;
    this.props.updatedAt = new Date();
  }

  public addTag(tag: string) {
    if (!this.props.tags.includes(tag)) {
      this.props.tags.push(tag);
      this.props.updatedAt = new Date();
    }
  }

  public toJSON() {
    return { ...this.props };
  }
}