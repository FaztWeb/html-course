var gEngine = gEngine || {};

gEngine.Core = (function() {
  var mCanvas, mContext,
      mWidth = 800, mHeight = 450;

  mCanvas   = document.getElementById('canvas');
  mContext  = mCanvas.getContext('2d');
  mCanvas.height  = mHeight;
  mCanvas.width   = mWidth;

  var mPublic = {
      mWidth:   mWidth
    , mHeight:  mHeight
    , mContext: mContext
  };

  return mPublic;
}());
