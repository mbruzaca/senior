package br.com.webapp.util;

/**
 * Utilitário para operações geográficas
 * 
 * @author Thiago Galbiatti Vespa
 */
public class GeoUtils {

	/**
	 * Raio médio da terra em quilômetros Ref:
	 * http://en.wikipedia.org/wiki/Earth_radius
	 */
	public static int EARTH_RADIUS_KM = 6371;
	
	public static double geoDistanceInKm(double firstLatitude,double firstLongitude, double secondLatitude, double secondLongitude) {

                if(firstLatitude==secondLatitude && firstLongitude==secondLongitude){
                    return 0;
                }
		double firstLatToRad = Math.toRadians(firstLatitude);
		double secondLatToRad = Math.toRadians(secondLatitude);
		double deltaLongitudeInRad = Math.toRadians(secondLongitude -  firstLongitude);
                try{
		double distanceKm = Math.acos(Math.cos(firstLatToRad) * Math.cos(secondLatToRad)* Math.cos(deltaLongitudeInRad) + Math.sin(firstLatToRad)* Math.sin(secondLatToRad))* EARTH_RADIUS_KM;
                if(Double.isNaN(distanceKm)){
                    distanceKm = 0;
                }
                return distanceKm;
                }catch(Exception e){
                    e.printStackTrace();
                    return 0;
                }
        
        }

}
