import { Color, EventData, Utils } from '@nativescript/core';
import { GetSetProperty, UrlPreviewCommon } from './common';

export class UrlPreview extends UrlPreviewCommon {
    @GetSetProperty()
    public url: string;
    @GetSetProperty()
    bgColor: string;
    @GetSetProperty()
    titleTextColor: string;
    @GetSetProperty()
    descriptionTextColor: string;
    @GetSetProperty()
    borderRadiusImage: number;
    @GetSetProperty()
    loadingColor: string;
    @GetSetProperty()
    borderRadius: number;
    createNativeView(): Object {
        this.width = UIScreen.mainScreen.bounds.size.width;
        this.height = 300;
        const containerView = UIView.alloc().initWithFrame(UIScreen.mainScreen.bounds);
        containerView.backgroundColor = UIColor.clearColor;
        const cardView = UIView.alloc().init();
        cardView.accessibilityIdentifier = this.generateId("card");
        cardView.translatesAutoresizingMaskIntoConstraints = false;
        cardView.backgroundColor = new Color(this.bgColor).ios;
        cardView.layer.cornerRadius = 12;
        cardView.layer.shadowColor = UIColor.blackColor.CGColor;
        cardView.layer.shadowOpacity = 0.15;
        cardView.layer.shadowOffset = CGSizeMake(0, 2);
        cardView.layer.shadowRadius = 4;

        // Spinner centrado sobre todo
        const spinner = UIActivityIndicatorView.alloc().initWithActivityIndicatorStyle(UIActivityIndicatorViewStyle.Large);
        spinner.color = new Color(this.loadingColor).ios;
        spinner.translatesAutoresizingMaskIntoConstraints = false;
        spinner.startAnimating();
        spinner.accessibilityIdentifier = this.generateId("spinner");
        cardView.addSubview(spinner);

        // Agregar el card al contenedor
        containerView.addSubview(cardView);

        const guide = containerView.safeAreaLayoutGuide;

        // Constraints del card (posición y altura fija)
        NSLayoutConstraint.activateConstraints([
            cardView.topAnchor.constraintEqualToAnchorConstant(guide.topAnchor, 16),
            cardView.leadingAnchor.constraintEqualToAnchorConstant(guide.leadingAnchor, 16),
            cardView.trailingAnchor.constraintEqualToAnchorConstant(guide.trailingAnchor, -16),
            cardView.heightAnchor.constraintEqualToConstant(300),

            spinner.centerXAnchor.constraintEqualToAnchor(cardView.centerXAnchor),
            spinner.centerYAnchor.constraintEqualToAnchor(cardView.centerYAnchor)
        ]);

        const scrapper = NSCSwiftKanna.alloc().init();
        scrapper.extractMetadataFromOnSuccessOnError(this.url, (p1: NSDictionary<any, any>) => {
            const data = this.nsDictToJSObject(p1);

            const titleLabel = UILabel.alloc().init();
            titleLabel.textColor = new Color(this.titleTextColor).ios;
            titleLabel.accessibilityIdentifier = this.generateId("title");
            titleLabel.translatesAutoresizingMaskIntoConstraints = false;
            // titleLabel.text = data.title;
            titleLabel.text = "TITULO";
            titleLabel.font = UIFont.boldSystemFontOfSize(18);
            titleLabel.textAlignment = NSTextAlignment.Center;
            cardView.addSubview(titleLabel);

            const descLabel = UILabel.alloc().init();
            descLabel.accessibilityIdentifier = this.generateId("desc");
            descLabel.translatesAutoresizingMaskIntoConstraints = false;
            descLabel.text = data.description;
            descLabel.font = UIFont.systemFontOfSize(14);
            descLabel.textColor = new Color(this.descriptionTextColor).ios;
            descLabel.numberOfLines = 2;
            cardView.addSubview(descLabel);

            const imageView = UIImageView.alloc().init();
            imageView.accessibilityIdentifier = this.generateId("image");
            imageView.translatesAutoresizingMaskIntoConstraints = false;
            imageView.contentMode = UIViewContentMode.ScaleToFill;
            imageView.clipsToBounds = true;
            imageView.layer.cornerRadius = 12; // Para evitar corte visual si hay redondeo en el card
            cardView.addSubview(imageView);

            // Descargar imagen desde URL
            const url = NSURL.URLWithString(data.image);
            const session = NSURLSession.sharedSession;
            const task = session.dataTaskWithURLCompletionHandler(url, (data, response, error) => {
                if (error) {
                    console.log("Error al descargar imagen:", error.localizedDescription);
                    return;
                }

                if (data) {
                    const uiImage = UIImage.imageWithData(data);
                    if (uiImage) {
                        Utils.dispatchToUIThread(() => {
                            imageView.image = uiImage;
                        });
                    }
                }
            });
            task.resume();

            // Constraints internos
            NSLayoutConstraint.activateConstraints([
                // Título con margen top de 5
                titleLabel.topAnchor.constraintEqualToAnchorConstant(cardView.topAnchor, 5),
                titleLabel.leadingAnchor.constraintEqualToAnchor(cardView.leadingAnchor),
                titleLabel.trailingAnchor.constraintEqualToAnchor(cardView.trailingAnchor),

                // Descripción debajo del título
                descLabel.topAnchor.constraintEqualToAnchorConstant(titleLabel.bottomAnchor, 4),
                descLabel.leadingAnchor.constraintEqualToAnchorConstant(cardView.leadingAnchor, 16),
                descLabel.trailingAnchor.constraintEqualToAnchorConstant(cardView.trailingAnchor, -16),

                // Imagen ocupa el resto del espacio
                imageView.topAnchor.constraintEqualToAnchorConstant(descLabel.bottomAnchor, 8),
                imageView.leadingAnchor.constraintEqualToAnchorConstant(cardView.leadingAnchor, 0),
                imageView.trailingAnchor.constraintEqualToAnchorConstant(cardView.trailingAnchor, 0),
                imageView.bottomAnchor.constraintEqualToAnchor(cardView.bottomAnchor)
            ]);

            // Quitar el spinner
            Utils.dispatchToUIThread(() => {
                spinner.removeFromSuperview();
            });
        }, (p1: NSError) => {
            console.log(p1.localizedDescription);
            Utils.dispatchToUIThread(() => {
                spinner.removeFromSuperview();
            });
        });
        return containerView;
    }

    initNativeView(): void {
        super.initNativeView();
        this.on("tap", (args: EventData) => {
            Utils.openUrl(this.url)
        })
    }

    disposeNativeView(): void {
        super.disposeNativeView();
    }

    private nsDictToJSObject(dict: NSDictionary<any, any>): Record<string, any> {
        const jsObj: Record<string, any> = {};
        const enumerator = dict.keyEnumerator();
        let key: string;

        while ((key = enumerator.nextObject())) {
            jsObj[key] = dict.objectForKey(key);
        }

        return jsObj;
    }

    private generateId(prefix: string): string {
        const random = Math.random().toString(36).substring(2, 10).toUpperCase(); // 8 caracteres
        return `${prefix}_${random}`;
    }

    public getData(url: string): Promise<{ title: string, description: string, image: string }> {
        return new Promise((rs, rj) => {
            try {
                const scrapper = NSCSwiftKanna.alloc().init();
                scrapper.extractMetadataFromOnSuccessOnError(
                    url,
                    (p1: NSDictionary<any, any>) => {
                        const data = this.nsDictToJSObject(p1);
                        rs({ title: data.title, description: data.description, image: data.image });
                    },
                    (p1: NSError) => {
                        console.log(p1.localizedDescription);
                        rj(p1.localizedDescription);
                    },
                )
            } catch (error) {
                console.log(error)
                rj(error);
            }
        })
    }
}
