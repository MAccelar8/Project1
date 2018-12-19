export interface ISem5_results{
  st_id: String,
  password:String,
  role:String,
  subject:String,
  sub:[{
    subname:String,
    internal:Number,
    external:Number
  }]

}
