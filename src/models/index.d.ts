import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RecommendationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Recommendation {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly address: string;
  readonly coverImage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Recommendation, RecommendationMetaData>);
  static copyOf(source: Recommendation, mutator: (draft: MutableModel<Recommendation, RecommendationMetaData>) => MutableModel<Recommendation, RecommendationMetaData> | void): Recommendation;
}