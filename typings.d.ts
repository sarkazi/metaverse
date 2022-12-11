interface ISanityBody {
  _id: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}

interface IImageSanity {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface IExploreData extends ISanityBody {
  _type: "explore";
  title: string;
  icon: IImageSanity;
}
export interface IInsightData extends ISanityBody {
  _type: "insight";
  title: string;
  subtitle: string;
  icon: IImageSanity;
}
export interface IWhatsNewData extends ISanityBody {
  _type: "whatsNew";
  title: string;
  subtitle: string;
  icon: IImageSanity;
}
