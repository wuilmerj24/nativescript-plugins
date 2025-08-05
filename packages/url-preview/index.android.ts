import { Application, Color, CoreTypes, Frame, GridLayout, Utils } from '@nativescript/core';
import { GetSetProperty, UrlPreviewCommon } from './common';

declare var wuilmerj24:any;

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
        const progressBar = new android.widget.ProgressBar(this._context, null, android.R.attr.progressBarStyleLarge);
        progressBar.setIndeterminate(true);
        const params = new android.widget.FrameLayout.LayoutParams(
            android.widget.FrameLayout.LayoutParams.WRAP_CONTENT,
            android.widget.FrameLayout.LayoutParams.WRAP_CONTENT
        );
        params.gravity = android.view.Gravity.CENTER;
        progressBar.setLayoutParams(params);
        const color = new Color(this.loadingColor).android; // tu color personalizado
        const colorStateList = android.content.res.ColorStateList.valueOf(color);
        progressBar.setIndeterminateTintList(colorStateList);

        const card: androidx.cardview.widget.CardView = new androidx.cardview.widget.CardView(this._context);
        card.setUseCompatPadding(true);
        card.setId(android.view.View.generateViewId());
        
        if(this.bgColor.length>0){
            card.setBackgroundColor(new Color(this.bgColor).android);
        }

        card.setRadius(this.borderRadius);

        card.addView(progressBar);
        progressBar.setVisibility(android.view.View.VISIBLE);
        

        const layout = new android.widget.LinearLayout(this._context);
        layout.setOrientation(android.widget.LinearLayout.VERTICAL);
        layout.setId(android.view.View.generateViewId());
        const backgroundDrawable = new android.graphics.drawable.GradientDrawable();
        backgroundDrawable.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
        backgroundDrawable.setColor(new Color(this.bgColor).android);
        backgroundDrawable.setCornerRadius(this.borderRadius);
        backgroundDrawable.setStroke(4, new Color('transparent').android);

        layout.setBackgroundDrawable(backgroundDrawable);

        wuilmerj24.plugins.ns.JsoupAsyncTask.fetchDocumentAsync(this.url, new wuilmerj24.plugins.ns.JsoupAsyncTask.ConnectionCallback({
            onComplete: (document: org.jsoup.nodes.Document)=>{   
                let ogTitle = document.select("meta[property=og:title]").attr("content");
                if(ogTitle.length===0){
                    ogTitle = document.title();
                }
                let ogDescription = document.select("meta[property=og:description]").attr("content");
                let metaDescription = document.select("meta[name=description]").attr("content");
                if(ogDescription.length===0){
                    ogDescription = metaDescription;
                }

                let ogImage = document.select("meta[property=og:image]").attr("content");
                if(ogImage.length===0){
                    let images: org.jsoup.select.Elements = document.select("img[src~=(?i)\\.(png|jpe?g|gif)]");
                    for(let i:number=0;i<images.size();i++){
                        const src = images.get(i).absUrl("src");
                        if(src.length>0){
                            ogImage=src;
                            break;
                        }
                    }
                }

                let ogVideo = document.select("meta[property=og:video]").attr("content");
                if(ogVideo.length===0){
                    // Elements videos = doc.select("iframe[src*='youtube.com'], iframe[src*='vimeo.com']");
                    let videos = document.select("iframe[src*='youtube.com'], iframe[src*='vimeo.com']");
                    if(!videos.isEmpty()){
                        ogVideo = videos.first().absUrl("src");
                    }
                }

                let ogSiteName = document.select("meta[property=og:site_name]").attr("content");
                if(ogSiteName.length===0){
                    ogSiteName = document.select("meta[property=og:site_name]").attr("content");
                }
                
                // Título
                const titleView = new android.widget.TextView(this._context);
                titleView.setTextSize(18);
                titleView.setTypeface(null, android.graphics.Typeface.BOLD);
                titleView.setText(ogTitle);
                if (this.titleTextColor.length>0){
                    titleView.setTextColor(new Color(this.titleTextColor).android)
                }

                // Descripción
                const descView = new android.widget.TextView(this._context);
                descView.setTextSize(14);
                descView.setText(ogDescription);
                if (this.descriptionTextColor.length>0){
                    descView.setTextColor(new Color(this.descriptionTextColor).android);
                }

                // Imagen / video
                const mediaView = new android.widget.ImageView(this._context);
                mediaView.setAdjustViewBounds(true);
                mediaView.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
                mediaView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
                    android.view.ViewGroup.LayoutParams.MATCH_PARENT,
                    400
                ));
                const Glide = com.bumptech.glide.Glide;
                Glide.with(this._context)
                    .load(ogImage)
                    // .transform(new com.bumptech.glide.load.resource.bitmap.CenterCrop(), new com.bumptech.glide.load.resource.bitmap.RoundedCorners(20))
                    .into(mediaView);

                // Agregar a layout
                layout.addView(titleView);
                layout.addView(descView);
                layout.addView(mediaView);
                card.addView(layout);
                card.setClickable(true);
                card.setOnClickListener(new android.view.View.OnClickListener({
                    onClick:(param0)=> {
                        const intent = new android.content.Intent(
                            android.content.Intent.ACTION_VIEW,
                            android.net.Uri.parse(this.url)
                        );
                        intent.setFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
                        this._context.startActivity(intent);
                    },
                }));
                card.removeView(progressBar);
            },
            onError: (e: java.io.IOException)=>{
                console.log("error",e);
                card.removeView(progressBar);
            }
        }));
        return card;
    }

    public getData(url: string): Promise<{ title: string, description: string, image: string }> {
        return new Promise((rs, rj) => {
            try {
                console.log("url ",url)
                wuilmerj24.plugins.ns.JsoupAsyncTask.fetchDocumentAsync(url, new wuilmerj24.plugins.ns.JsoupAsyncTask.ConnectionCallback({
                    onComplete: (document: org.jsoup.nodes.Document) => {
                        let ogTitle = document.select("meta[property=og:title]").attr("content");
                        if (ogTitle.length === 0) {
                            ogTitle = document.title();
                        }
                        let ogDescription = document.select("meta[property=og:description]").attr("content");
                        let metaDescription = document.select("meta[name=description]").attr("content");
                        if (ogDescription.length === 0) {
                            ogDescription = metaDescription;
                        }

                        let ogImage = document.select("meta[property=og:image]").attr("content");
                        if (ogImage.length === 0) {
                            let images: org.jsoup.select.Elements = document.select("img[src~=(?i)\\.(png|jpe?g|gif)]");
                            for (let i: number = 0; i < images.size(); i++) {
                                const src = images.get(i).absUrl("src");
                                if (src.length > 0) {
                                    ogImage = src;
                                    break;
                                }
                            }
                        }

                        let ogVideo = document.select("meta[property=og:video]").attr("content");
                        if (ogVideo.length === 0) {
                            // Elements videos = doc.select("iframe[src*='youtube.com'], iframe[src*='vimeo.com']");
                            let videos = document.select("iframe[src*='youtube.com'], iframe[src*='vimeo.com']");
                            if (!videos.isEmpty()) {
                                ogVideo = videos.first().absUrl("src");
                            }
                        }

                        rs({title:ogTitle,description:ogDescription,image:ogImage || ogVideo});
                       
                    },
                    onError: (e: java.io.IOException) => {
                        console.log("error", e);
                        rj(e.getMessage())
                    }
                }));
            } catch (error) {
                console.log(error)
                rj(error);
            }
        })
    }
}