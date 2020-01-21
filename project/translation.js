async function translateText(sourceLang, targetLang, text, callback) {

  const GCLOUD_PROJECT = process.env.GCLOUD_PROJECT;
  const LOCATION = process.env.GCLOUD_LOCATION;

  // Imports the Google Cloud Translation library
  const {TranslationServiceClient} = require('@google-cloud/translate');

  // Instantiates a client
  const translationClient = new TranslationServiceClient();

  const request = {
    parent: `projects/${GCLOUD_PROJECT}/locations/${LOCATION}`,
    contents: [text],
    mimeType: 'text/plain',
    sourceLanguageCode: sourceLang,
    targetLanguageCode: targetLang,
  };

  let finalTranslation = '';
  try {
    const [response] = await translationClient.translateText(request);

    for (const translation of response.translations) {
      finalTranslation += `${translation.translatedText} `;
    }

    console.log(`Final translation is: ${finalTranslation}`);

    callback && callback(finalTranslation);

    return finalTranslation;

  } catch (error) {
    console.error(error.details);
  }
}

module.exports = {
  translateText: translateText
}

//translateText('en-US', 'fr-FR', 'hello!');